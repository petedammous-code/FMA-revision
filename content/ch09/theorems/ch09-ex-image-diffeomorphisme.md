---
id: ch09-ex-image-diffeomorphisme
type: proposition
chapter: 9
title: Image d'une sous-variété par un difféomorphisme de $\mathbb R^N$
ref: Exemple IX.2.8
page: 149
importance: 2
depends: [ch09-sous-variete-def, ch06-diffeomorphisme-def, ch05-composition-differentielles]
tags: [sous-variete, diffeomorphisme, image, parametrage-local, changement-de-coordonnees]
---
## Intuition

> 💡 Un difféomorphisme $\Phi$ de $\R^N$ est un changement de coordonnées lisse et lisse dans les deux sens : il peut tordre, étirer, courber l'espace, mais il ne crée ni pli, ni pointe, ni croisement, et ne recolle jamais deux points distincts. Il transporte donc une sous-variété $S$ sur une sous-variété $\Phi(S)$ de même dimension : il suffit de composer les paramétrages locaux de $S$ par $\Phi$.

Rappel : un $C^k$-**difféomorphisme** $\Phi:\R^N\to\R^N$ est une bijection de classe $C^k$ dont l'inverse est aussi de classe $C^k$ ([[ch06-diffeomorphisme-def]]). Une **sous-variété** est définie par des paramétrages locaux $x:U\to V$ ($C^k$, homéomorphisme de $U$ sur $V\cap S$, immersion) ([[ch09-sous-variete-def]]).

## Énoncé

**Proposition (poly, Exemple IX.2.8, p. 149).** Soit $S$ une sous-variété de $\R^N$ et soit $\Phi$ un difféomorphisme de $\R^N$ sur lui-même. Alors $\Phi(S)$ est encore une sous-variété de $\R^N$.

Précisément (le poly ne précise pas les classes, cf. Remarques IX.2.2) : si $S$ est de dimension $m$ et de classe $C^k$ et si $\Phi$ est un $C^k$-difféomorphisme de $\R^N$, alors $\Phi(S)$ est une sous-variété de dimension $m$ et de classe $C^k$ ; si $x$ est un paramétrage local de $S$ en $p$, alors $\Phi\circ x$ est un paramétrage local de $\Phi(S)$ en $\Phi(p)$.

## Hypothèses

### H1 — $\Phi$ est un difféomorphisme (et pas seulement un homéomorphisme)

**Rôle.** La différentiabilité de $\Phi$ rend $\Phi\circ x$ de classe $C^k$ (condition 1) ; l'**inversibilité de $d\Phi$**, conséquence de la différentiabilité de $\Phi^{-1}$, rend $\Phi\circ x$ immersive (condition 3) ; la continuité de $\Phi$ et $\Phi^{-1}$ préserve la condition 2.

**Si on la retire.** Un homéomorphisme peut détruire la régularité. L'application $\Phi(u,v)=(u,v+|u|)$ est un homéomorphisme de $\R^2$ (inverse $(u,v)\mapsto(u,v-|u|)$, continu) ; elle envoie la droite $S=\{v=0\}$ sur le graphe de $|u|$, qui n'est **pas** une sous-variété $C^1$ : si $y=(y_1,y_2)$ était un paramétrage en $(0,0)=y(s_0)$ avec $y'(s_0)\neq0$, alors $y_2=|y_1|\ge0$ serait minimal en $s_0$, d'où $y_2'(s_0)=0$, puis $y_1'(s_0)\neq0$, et $\frac{y_2(s)}{s-s_0}=\frac{|y_1(s)|}{s-s_0}$ tendrait vers $\pm|y_1'(s_0)|$ selon le côté : contradiction. Même un homéomorphisme $C^\infty$ ne suffit pas : $\Phi(u,v)=(u^3,v)$ (inverse $(a,b)\mapsto(a^{1/3},b)$, non différentiable en $a=0$) envoie la parabole $\{v=u^2\}$ sur le cusp $\{(t^3,t^2)\}=\{(a,b) : b=|a|^{2/3}\}$, qui n'est pas une sous-variété $C^1$ (même argument : $y_2=|y_1|^{2/3}\ge0$ forcerait $y_1'(s_0)\neq0$, puis $y_2(s)/|s-s_0|\to+\infty$).

### H2 — $S$ sous-variété

**Rôle.** Fournit les paramétrages à transporter.

**Si on la retire.** Rien ne s'améliore : $\Phi(S)$ est une sous-variété si et seulement si $S$ en est une (appliquer le résultat à $\Phi^{-1}$).

### H3 — $\Phi$ défini sur tout $\R^N$

**Rôle.** Confort : $\Phi(V)$ est alors automatiquement un ouvert de $\R^N$.

**Si on la retire.** La conclusion reste vraie, preuve identique, pour un difféomorphisme $\Phi:\Omega\to\Omega'$ entre ouverts de $\R^N$ et $S\subset\Omega$ (Exercice IX.9.1) : on remplace $V$ par $V\cap\Omega$.

## Idée de la preuve

Si $x:U\to V$ paramètre $S$ près de $p$, alors $\Phi\circ x : U\to\Phi(V)$ paramètre $\Phi(S)$ près de $\Phi(p)$ : composée $C^k$ ; homéomorphisme car $\Phi$ en est un et $\Phi(V\cap S)=\Phi(V)\cap\Phi(S)$ ; immersion car $d(\Phi\circ x)_q=d\Phi_{x(q)}\circ dx_q$ avec $d\Phi$ inversible.

## Preuve

*Le poly ne donne pas de preuve ; voici la vérification des trois conditions de [[ch09-sous-variete-def]].*

Soit $p'\in\Phi(S)$ et $p=\Phi^{-1}(p')\in S$. Soit $x:U\to V$ un paramétrage local de $S$ en $p$ : $U$ ouvert de $\R^m$, $V$ voisinage ouvert de $p$. Posons
$$
V'=\Phi(V),\qquad y=\Phi\circ x : U\to V'.
$$
$V'=(\Phi^{-1})^{-1}(V)$ est l'image réciproque d'un ouvert par l'application continue $\Phi^{-1}$ : c'est un ouvert de $\R^N$, contenant $\Phi(p)=p'$.

**Condition 1.** $y$ est la composée de deux applications de classe $C^k$, donc de classe $C^k$ (règle de la chaîne, [[ch05-composition-differentielles]], itérée).

**Condition 2.** Comme $\Phi$ est bijective, $\Phi(V\cap S)=\Phi(V)\cap\Phi(S)=V'\cap\Phi(S)$. Or $x$ est un homéomorphisme de $U$ sur $V\cap S$, et $\Phi$ restreinte à $V\cap S$ est un homéomorphisme de $V\cap S$ sur $\Phi(V\cap S)$ (continue, bijective, d'inverse la restriction de $\Phi^{-1}$, continue). Par composition, $y$ est un homéomorphisme de $U$ sur $V'\cap\Phi(S)$.

**Condition 3.** En différentiant $\Phi^{-1}\circ\Phi=\mathrm{id}_{\R^N}$ et $\Phi\circ\Phi^{-1}=\mathrm{id}_{\R^N}$, on obtient que $d\Phi_z$ est inversible pour tout $z$, d'inverse $d(\Phi^{-1})_{\Phi(z)}$. Pour $q\in U$, $dy_q=d\Phi_{x(q)}\circ dx_q$ est la composée d'une application linéaire injective et d'une application linéaire bijective : elle est injective.

Ainsi $y$ est un paramétrage local de classe $C^k$ de $\Phi(S)$ en $p'$, défini sur un ouvert de $\R^m$. Ceci valant pour tout $p'\in\Phi(S)$, $\Phi(S)$ est une sous-variété de dimension $m$ et de classe $C^k$. $\square$

## Preuve à trous

Soit $p'=\Phi(p)\in\Phi(S)$ et $x:U\to V$ un paramétrage local de $S$ en $p$. On pose $y=\Phi\circ x:U\to V'=\Phi(V)$, où <trou indice="Φ(V) est l'image réciproque de V par...">$V'=(\Phi^{-1})^{-1}(V)$ est ouvert par continuité de $\Phi^{-1}$</trou>.

$y$ est $C^k$ comme composée. Pour la condition 2, on utilise <trou indice="Φ est injective">$\Phi(V\cap S)=\Phi(V)\cap\Phi(S)$</trou>, et $y$ est la composée des homéomorphismes $x:U\to V\cap S$ et $\Phi|_{V\cap S}$.

Pour la condition 3, <trou indice="règle de la chaîne, et que sait-on de dΦ ?">$dy_q=d\Phi_{x(q)}\circ dx_q$, avec $d\Phi_{x(q)}$ inversible (d'inverse $d(\Phi^{-1})_{\Phi(x(q))}$) et $dx_q$ injective</trou>, donc $dy_q$ est injective. $\square$

## Exemples

* **Ellipses et ellipsoïdes.** $\Phi(u,v)=(au,bv)$ avec $a,b>0$ est un isomorphisme linéaire, donc un difféomorphisme $C^\infty$. Il envoie le cercle unité sur l'ellipse $\{\frac{u^2}{a^2}+\frac{v^2}{b^2}=1\}$, qui est donc une sous-variété de dimension $1$, paramétrée par $\theta\mapsto(a\cos\theta,b\sin\theta)$. De même en dimension $3$ pour les ellipsoïdes (comparer avec [[ch09-ex-quadriques]]).
* **Graphes comme droites tordues.** Si $g:\R\to\R$ est $C^k$, $\Phi(u,v)=(u,v+g(u))$ est un $C^k$-difféomorphisme de $\R^2$, d'inverse $(u,v)\mapsto(u,v-g(u))$. Il envoie la droite $\{v=0\}$ sur le graphe de $g$, qui est donc une sous-variété de dimension $1$ et de classe $C^k$ (cf. [[ch09-graphe-sous-variete]]).
* **Rotations, translations.** Tout déplacement de $\R^N$ transforme une sous-variété en sous-variété : un cercle de centre $a$ et de rayon $r$ (Exercice IX.2.10) est l'image du cercle unité par $z\mapsto a+rz$.

## Pièges

* > ⚠️ Il faut un **difféomorphisme** : un homéomorphisme, même $C^\infty$, ne suffit pas ($(u,v)\mapsto(u^3,v)$ envoie la parabole sur un cusp).
* L'énoncé ne dit rien de l'image par une application **non injective** ou **non immersive** : l'image d'une sous-variété par une application $C^\infty$ quelconque n'est en général pas une sous-variété (la projection $(u,v)\mapsto u$ envoie le cercle sur le segment fermé $[-1,1]$, qui n'en est pas une).
* La classe de $\Phi(S)$ est le minimum des classes de $S$ et de $\Phi$ ; la dimension est conservée.
* Utilisation typique : on redresse ou on simplifie une sous-variété par un changement de coordonnées global (isomorphisme linéaire dans [[ch09-localement-graphe-implique-sous-variete]]).
