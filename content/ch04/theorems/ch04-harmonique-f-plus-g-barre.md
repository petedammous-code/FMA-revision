---
id: ch04-harmonique-f-plus-g-barre
type: theorem
chapter: 4
title: Décomposition $h = f+\bar g$ des fonctions harmoniques sur un ouvert simplement connexe
ref: Théorème IV.2.2
page: 76
importance: 3
depends: [ch04-harmonique-def, ch01-holomorphe-ssi-c1-et-dzbar-nul, ch02-primitive-simplement-connexe, ch01-formulaire-dz-dzbar, ch01-laplacien-harmonique, ch01-cauchy-riemann]
tags: [harmonique, holomorphe, simplement-connexe, primitive, conjuguee, decomposition]
---
## Intuition

> 💡 Une fonction harmonique est un objet « à deux faces » : une face holomorphe et une face anti-holomorphe. Puisque $\Delta = 4\,\partial_{\bar z}\partial_z$, dire $\Delta h=0$, c'est dire que $\partial_z h$ est **holomorphe**. On l'intègre (il faut une primitive : d'où la simple connexité) en une fonction holomorphe $f$ ; ce qui reste, $h-f$, est tué par $\partial_z$, donc son conjugué est tué par $\partial_{\bar z}$ : c'est une fonction holomorphe $g$ conjuguée. Bilan : $h = f+\bar g$.

Image mentale : les fonctions harmoniques sont les « sommes » des fonctions holomorphes (séries en $z$) et des fonctions anti-holomorphes (séries en $\bar z$), exactement comme un polynôme harmonique en $x,y$ se sépare en un polynôme en $z$ plus un polynôme en $\bar z$ : $x^2-y^2+2xy = \Re(z^2)+\Im(z^2) = \tfrac{1-i}{2}z^2 + \overline{\tfrac{1-i}{2}z^2}$.

Rappels : $h$ est **harmonique** sur l'ouvert $\Omega$ si elle est $C^2$ et $\Delta h = \partial_x^2h+\partial_y^2h = 4\,\partial_z\partial_{\bar z}h = 0$ ([[ch04-harmonique-def]]) ; $\Omega$ est **simplement connexe** s'il est connexe et si tout lacet de $\Omega$ est homotope à un lacet constant ([[ch02-homotopie-simplement-connexe]]) ; c'est l'hypothèse sous laquelle toute fonction holomorphe admet une primitive holomorphe ([[ch02-primitive-simplement-connexe]]).

## Énoncé

**Théorème (poly, Théorème IV.2.2, p. 76).** Toute fonction harmonique $h:\Omega\to\C$, définie sur un ouvert $\Omega$ simplement connexe, s'écrit sous la forme
$$
h = f+\bar g \qquad\text{où } f,g\in\Hol(\Omega).
$$

*Précision (non-unicité).* Le couple $(f,g)$ n'est pas unique : si $h=f+\bar g$, alors pour toute constante $c\in\C$, $h = (f+c)+\overline{(g-\bar c)}$. C'est la seule liberté : si $f+\bar g = f_1+\bar g_1$ sur $\Omega$ connexe, alors $f-f_1 = \overline{g_1-g}$ est à la fois holomorphe et conjuguée d'une holomorphe, donc de différentielle nulle ($\partial_{\bar z}$ et $\partial_z$ nuls), donc constante.

## Hypothèses

### H1 — $\Omega$ est simplement connexe

**Rôle.** C'est ce qui permet d'intégrer : la fonction holomorphe $\partial_z h$ doit admettre une **primitive holomorphe** $f$ sur tout $\Omega$ ([[ch02-primitive-simplement-connexe]]). La connexité (incluse dans la simple connexité) ne sert pas dans l'existence, seulement dans l'unicité à constante près.

**Si on la retire.** Sur $\C^*$ (non simplement connexe), $h(z) = \log|z|$ est harmonique (voir [[ch04-harmonique-def]], exemples) mais **ne s'écrit pas** $f+\bar g$ avec $f,g\in\Hol(\C^*)$. Vérification : supposons $\log|z| = f+\bar g$. Comme $h$ est réelle, $h = \bar h = \bar f+g$ ; en ajoutant, $2\log|z| = (f+g)+\overline{(f+g)} = 2\Re F$ avec $F := f+g\in\Hol(\C^*)$. Alors $u(z) := e^{F(z)}/z$ est holomorphe sur $\C^*$ et $|u(z)| = e^{\Re F(z)}/|z| = e^{\log|z|}/|z| = 1$ : $|u|$ est constante sur l'ouvert connexe $\C^*$, donc $u$ est constante (principe du maximum, [[ch01-principe-maximum]]), $u\equiv c$ avec $|c|=1$. Ainsi $e^{F(z)} = cz$ ; en dérivant, $F'(z)e^{F(z)} = c$, soit $F'(z) = 1/z$ : la fonction $1/z$ aurait une primitive holomorphe sur $\C^*$, donc $\int_{C(0,1)}\frac{dz}{z} = 0$ ([[ch01-integrale-primitive]]). Or cette intégrale vaut $2i\pi$ : contradiction. En revanche la décomposition reste vraie **localement**, sur tout disque contenu dans $\Omega$ ([[ch04-harmonique-decomposition-locale]]), et globalement sur $\C\setminus\R_-$ : $\log|z| = \tfrac12\mathrm{Log}\,z+\overline{\tfrac12\mathrm{Log}\,z}$.

### H2 — $h$ est harmonique : de classe $C^2$ et $\Delta h = 0$

**Rôle.** La classe $C^2$ donne que $\partial_z h$ est $C^1$ (nécessaire pour appliquer le critère « $C^1$ et $\partial_{\bar z} = 0$ $\Rightarrow$ holomorphe » de la Remarque I.2.6) et autorise $\Delta = 4\,\partial_{\bar z}\partial_z$ (Schwarz). L'équation $\Delta h=0$ est exactement $\partial_{\bar z}(\partial_z h) = 0$, c'est-à-dire l'holomorphie de $\partial_z h$.

**Si on la retire.** Toute fonction de la forme $f+\bar g$ est harmonique ([[ch04-holomorphe-implique-harmonique]]), donc une fonction non harmonique comme $|z|^2$ ($\Delta|z|^2 = 4$) n'admet aucune telle écriture, même localement. Quant à la régularité $C^2$, elle est **a posteriori gratuite** : le théorème montre que toute fonction harmonique est localement $f+\bar g$ donc $C^\infty$ ([[ch01-holomorphe-analytique]]) ; mais il faut la supposer pour que $\Delta h$ ait un sens dans la définition.

### H3 — $h$ est à valeurs complexes (autorisé)

**Rôle.** Aucune restriction : l'énoncé vaut pour $h$ complexe, et c'est utile. Le cas réel est traité au Corollaire IV.2.4 ([[ch04-harmonique-reelle-partie-reelle]]) : on obtient alors $h = \Re(f+g)$.

**Si on la retire.** Rien ne change ; se rappeler seulement que pour $h$ réelle on ne peut pas prendre $g = 0$ en général : $x = \tfrac12 z+\overline{\tfrac12 z}$ nécessite les deux termes.

## Idée de la preuve

$\partial_{\bar z}(\partial_z h) = \tfrac14\Delta h = 0$ et $\partial_z h$ est $C^1$ : $\partial_z h$ est holomorphe. On prend une primitive holomorphe $f$ ($\Omega$ simplement connexe). Alors $\partial_z(h-f) = 0$, donc, en conjuguant, $\partial_{\bar z}\overline{(h-f)} = 0$ : $g := \overline{h-f}$ est holomorphe et $h = f+\bar g$.

## Preuve

Soit $h$ harmonique sur $\Omega$ simplement connexe.

*Étape 1 : $\partial_z h$ est holomorphe.* Comme $h$ est de classe $C^2$, la fonction $u := \dfrac{\partial h}{\partial z} = \tfrac12\big(\partial_x h - i\,\partial_y h\big)$ est de classe $C^1$ sur $\Omega$. Par définition d'une fonction harmonique et la factorisation du laplacien (Remarque I.2.8, [[ch01-laplacien-harmonique]]),
$$
\frac{\partial}{\partial\bar z}\Big(\frac{\partial h}{\partial z}\Big) = \frac14\,\Delta h = 0 \quad\text{sur }\Omega .
$$
D'après la Remarque I.2.6 ([[ch01-holomorphe-ssi-c1-et-dzbar-nul]]) — une fonction de classe $C^1$ vérifiant $\partial_{\bar z}u = 0$ partout est holomorphe — on a $u\in\Hol(\Omega)$.

*Étape 2 : on intègre.* L'ouvert $\Omega$ étant simplement connexe, le Théorème II.9.1 ([[ch02-primitive-simplement-connexe]]) fournit une primitive holomorphe $f\in\Hol(\Omega)$ de $u$ : $f' = u$. Pour une fonction holomorphe, $f' = \dfrac{\partial f}{\partial z}$ (formule (I.2.7), [[ch01-cauchy-riemann]]), donc
$$
\frac{\partial f}{\partial z} = \frac{\partial h}{\partial z} \quad\text{sur }\Omega .
$$

*Étape 3 : le reste est anti-holomorphe.* Posons $k := h-f$, fonction de classe $C^2$ (donc $C^1$) sur $\Omega$. Par linéarité (formule (I.2.10), [[ch01-formulaire-dz-dzbar]]), $\dfrac{\partial k}{\partial z} = \dfrac{\partial h}{\partial z}-\dfrac{\partial f}{\partial z} = 0$. La formule de conjugaison (I.2.9) ([[ch01-formulaire-dz-dzbar]]) donne alors
$$
\frac{\partial\bar k}{\partial\bar z} = \overline{\frac{\partial k}{\partial z}} = 0 \quad\text{sur }\Omega .
$$
La fonction $g := \bar k = \overline{h-f}$ est de classe $C^1$ et vérifie $\partial_{\bar z}g = 0$ : par la Remarque I.2.6 à nouveau, $g\in\Hol(\Omega)$.

*Conclusion.* $h = f+k = f+\bar g$ avec $f,g\in\Hol(\Omega)$. $\square$

> ⚠️ Dans le poly imprimé (p. 77), la preuve conjugue toute l'équation : $0 = \overline{\partial_z h - \partial_z f} = \overline{\partial_z(h-f)} = \partial_{\bar z}\overline{(h-f)}$, puis pose $g := \overline{h-f}$. Dans une copie texte du PDF, la barre de conjugaison disparaît et l'on lit « $g := h-f$ est holomorphe » : c'est faux en général ($h-f$ est **anti**-holomorphe, c'est-à-dire que $\overline{h-f}$ est holomorphe). Le bon énoncé est bien $g := \overline{h-f}$.

## Preuve à trous

Soit $h$ harmonique sur $\Omega$ simplement connexe. La fonction $u := \partial_z h$ est $C^1$ et vérifie <trou indice="factorisation du laplacien">$\partial_{\bar z}u = \tfrac14\Delta h = 0$</trou>, donc $u$ est holomorphe (Remarque I.2.6). Comme $\Omega$ est simplement connexe, <trou indice="que fournit le Théorème II.9.1 ?">$u$ admet une primitive holomorphe $f$ sur $\Omega$, et $\partial_z f = f' = u = \partial_z h$</trou>. Posons $k := h-f$ : alors $\partial_z k = 0$, et en conjuguant par (I.2.9), <trou indice="conjuguer l'équation">$\partial_{\bar z}\bar k = \overline{\partial_z k} = 0$</trou>, donc $g := \bar k$ est holomorphe ($C^1$ et $\partial_{\bar z}g=0$). Finalement <trou>$h = f+k = f+\bar g$</trou>. $\square$

## Exemples

* **$h(z) = xy$ sur $\C$** (harmonique : $\Delta(xy) = 0$). On suit la preuve. $\partial_z(xy) = \tfrac12(y-ix) = -\tfrac i2(x+iy) = -\tfrac i2 z$, holomorphe. Primitive : $f(z) = -\tfrac i4 z^2$. Reste : $h-f = xy+\tfrac i4(x^2-y^2+2ixy) = \tfrac12xy+\tfrac i4(x^2-y^2)$, et $g = \overline{h-f} = \tfrac12 xy-\tfrac i4(x^2-y^2) = -\tfrac i4\big(x^2-y^2+2ixy\big) = -\tfrac i4 z^2$. Vérification : $f+\bar g = -\tfrac i4z^2+\overline{-\tfrac i4 z^2} = 2\Re\big(-\tfrac i4 z^2\big) = \tfrac12\Im(z^2) = xy$. $\checkmark$
* **$h(z) = \log|z|$ sur $\Omega = \C\setminus\R_-$** (simplement connexe car étoilé par rapport à $1$, [[ch02-etoile-simplement-connexe]]). $\partial_z\log|z| = \tfrac12\Big(\dfrac{x}{x^2+y^2}-i\dfrac{y}{x^2+y^2}\Big) = \dfrac{\bar z}{2|z|^2} = \dfrac1{2z}$ ; primitive sur $\Omega$ : $f = \tfrac12\mathrm{Log}\,z$ ([[ch02-logarithme-determination-principale-def]]). Alors $h-f = \tfrac12\log|z|-\tfrac i2\mathrm{Arg}\,z$ et $g = \overline{h-f} = \tfrac12\log|z|+\tfrac i2\mathrm{Arg}\,z = \tfrac12\mathrm{Log}\,z$. Donc $\log|z| = \tfrac12\mathrm{Log}\,z+\overline{\tfrac12\mathrm{Log}\,z}$ sur $\C\setminus\R_-$, mais aucune écriture de ce type n'existe sur $\C^*$ (hypothèse H1).
* **Une fonction complexe : $h = z^2+3\bar z+|z|^2$ ?** Non : $\Delta|z|^2 = 4$, $h$ n'est pas harmonique. En revanche $h = z^2+3\bar z$ est harmonique avec $f = z^2$, $g = 3z$ : la décomposition se lit directement quand $h$ est un polynôme en $z,\bar z$ sans monôme mixte $z^a\bar z^b$ ($a,b\ge1$) ; les monômes mixtes sont exactement ceux que $\partial_z\partial_{\bar z}$ ne tue pas.

## Pièges

* > ⚠️ Ne pas écrire $g = h-f$ : c'est $\bar g = h-f$, soit $g = \overline{h-f}$. La fonction $h-f$ vérifie $\partial_z(h-f) = 0$ : elle est anti-holomorphe.
* La simple connexité sert **une fois**, pour la primitive de $\partial_z h$ ; sans elle, $\log|z|$ sur $\C^*$ est le contre-exemple canonique, et il ne reste que la version locale ([[ch04-harmonique-decomposition-locale]]).
* Ne pas confondre avec « $h$ réelle est la partie réelle d'une holomorphe » ([[ch04-harmonique-reelle-partie-reelle]]) : ici $h$ peut être complexe, et la conclusion fait intervenir **deux** fonctions holomorphes.
* Le couple $(f,g)$ n'est défini qu'à $(f+c,\,g-\bar c)$ près ; dans un exercice, fixer la constante de la primitive ne change rien à la conclusion.
* « $\partial_z h$ holomorphe » utilise que $\partial_z h$ est $C^1$ : c'est là que la classe $C^2$ de $h$ intervient, pas seulement dans l'écriture $\Delta h$.
