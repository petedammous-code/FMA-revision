---
id: ch01-cauchy-riemann
type: corollary
chapter: 1
title: "Conditions de Cauchy réelles (Cauchy–Riemann) : $\partial f/\partial\bar z=0$"
ref: Corollaire I.2.4
page: 8
importance: 3
depends: [ch01-decomposition-r-lineaire, ch01-operateurs-dz-dzbar, ch01-c-derivable-ssi-df-c-lineaire]
tags: [cauchy-riemann, dzbar, c-derivable, conditions-de-cauchy, holomorphie]
---
## Intuition

> 💡 Une fonction $f=P+iQ$ différentiable au sens réel a une différentielle $df_z(\omega)=\frac{\partial f}{\partial z}(z)\,\omega+\frac{\partial f}{\partial\bar z}(z)\,\bar\omega$ ([[ch01-operateurs-dz-dzbar]]) : une partie qui « multiplie par un complexe » et une partie qui « conjugue ». Être $\C$-dérivable, c'est n'avoir **aucune** partie conjuguante : $\frac{\partial f}{\partial\bar z}=0$. Slogan : *une fonction holomorphe ne dépend pas de $\bar z$.*

Traduit en coordonnées réelles, cela donne deux équations aux dérivées partielles reliant $P=\Re f$ et $Q=\Im f$ : les **conditions de Cauchy réelles** (dites aussi de Cauchy–Riemann). Image : la dérivée dans la direction $y$ doit être celle dans la direction $x$ tournée de $90°$, $\frac{\partial f}{\partial y}=i\frac{\partial f}{\partial x}$.

C'est **le** test pratique d'holomorphie : on calcule $\frac{\partial f}{\partial\bar z}$ (avec les règles de calcul [[ch01-formulaire-dz-dzbar]]) ou on vérifie les deux équations sur $P$ et $Q$.

## Énoncé

**Corollaire (poly, Corollaire I.2.4, p. 8).** Soit $f$ différentiable au point $z$. Alors $f$ est $\C$-dérivable en $z$ si et seulement si
$$
\text{(I.2.5)}\qquad\frac{\partial f}{\partial\bar z}(z)=0,
$$
c'est-à-dire, en écrivant $f=P+iQ$, si et seulement si
$$
\text{(I.2.6)}\qquad\frac{\partial P}{\partial x}(z)=\frac{\partial Q}{\partial y}(z)\qquad\text{et}\qquad\frac{\partial P}{\partial y}(z)=-\frac{\partial Q}{\partial x}(z).
$$
On appelle ces dernières relations les **conditions de Cauchy réelles**. Lorsqu'elles sont satisfaites, on a
$$
\text{(I.2.7)}\qquad f'(z)=\frac{\partial f}{\partial z}(z).
$$
(Ici $f:\Omega\to\C$ est définie sur un ouvert $\Omega$ de $\C$ et $z\in\Omega$.)

## Hypothèses

### H1 — $f$ différentiable (au sens réel) au point $z$

**Rôle.** Elle donne la décomposition (I.2.4) de $df_z$ et permet d'utiliser la proposition I.2.3 ([[ch01-c-derivable-ssi-df-c-lineaire]]). Elle est **indispensable** : les équations (I.2.6) ne portent que sur quatre dérivées partielles, c'est-à-dire sur le comportement de $f$ le long des deux axes passant par $z$, ce qui ne dit rien des autres directions.

**Si on la retire.** Deux contre-exemples en $z=0$ :

* $f(z)=\dfrac{\bar z^{\,2}}{z}$ ($z\ne0$), $f(0)=0$, **continue** en $0$ ($|f(z)|=|z|$). Sur l'axe réel $f(x)=x$, sur l'axe imaginaire $f(iy)=\frac{(-iy)^2}{iy}=\frac{-y^2}{iy}=iy$. Donc $\frac{\partial P}{\partial x}(0)=1$, $\frac{\partial Q}{\partial x}(0)=0$, $\frac{\partial P}{\partial y}(0)=0$, $\frac{\partial Q}{\partial y}(0)=1$ : (I.2.6) est vérifiée, et $\frac{\partial f}{\partial\bar z}(0)=\frac12(1+i\cdot i)=0$. Mais $\frac{f(\omega)}{\omega}=\frac{\bar\omega^{\,2}}{\omega^2}=e^{-4i\theta}$ pour $\omega=re^{i\theta}$ : pas de limite, $f$ n'est pas $\C$-dérivable en $0$.
* $f(z)=\exp(-z^{-4})$ ($z\ne0$), $f(0)=0$. Pour $z=x$ réel, $f(x)=e^{-1/x^4}$ ; pour $z=iy$, $z^4=y^4$ et $f(iy)=e^{-1/y^4}$ ; comme $\frac{e^{-1/\tau^4}}{\tau}\to0$, les quatre dérivées partielles en $0$ sont nulles et (I.2.6) est vérifiée. Mais pour $z=re^{i\pi/4}$, $z^4=r^4e^{i\pi}=-r^4$ et $f(z)=e^{1/r^4}\to+\infty$ quand $r\to0$ : $f$ n'est même pas continue en $0$.

## Idée de la preuve

Par la proposition I.2.3, $\C$-dérivable $\iff$ $df_z$ $\C$-linéaire ; par le lemme I.2.1 et (I.2.4), $df_z$ est $\C$-linéaire $\iff$ le coefficient $\frac{\partial f}{\partial\bar z}(z)$ de $\bar\omega$ est nul. On sépare enfin parties réelle et imaginaire de $2\frac{\partial f}{\partial\bar z}$.

## Preuve

Comme $f$ est différentiable en $z$, la formule (I.2.4) ([[ch01-operateurs-dz-dzbar]]) donne
$$
df_z(\omega)=\frac{\partial f}{\partial z}(z)\,\omega+\frac{\partial f}{\partial\bar z}(z)\,\bar\omega\qquad(\omega\in\C).
$$
D'après le lemme I.2.1 ([[ch01-decomposition-r-lineaire]]), cette décomposition est unique et $df_z$ est $\C$-linéaire si et seulement si le coefficient de $\bar\omega$ est nul, c'est-à-dire si et seulement si $\frac{\partial f}{\partial\bar z}(z)=0$ ; $df_z$ est alors la multiplication par $\frac{\partial f}{\partial z}(z)$.

La proposition I.2.3 ([[ch01-c-derivable-ssi-df-c-lineaire]]) dit que, $f$ étant différentiable en $z$, $f$ est $\C$-dérivable en $z$ si et seulement si $df_z$ est $\C$-linéaire, et qu'alors $df_z$ est la multiplication par $f'(z)$. On obtient l'équivalence avec (I.2.5) ; de plus, si (I.2.5) a lieu, $df_z$ est à la fois la multiplication par $f'(z)$ et par $\frac{\partial f}{\partial z}(z)$, d'où (en évaluant en $\omega=1$) $f'(z)=\frac{\partial f}{\partial z}(z)$, soit (I.2.7).

Enfin, en séparant parties réelle et imaginaire ($P$, $Q$ étant réelles),
$$
2\frac{\partial f}{\partial\bar z}=\Bigl(\frac{\partial}{\partial x}+i\frac{\partial}{\partial y}\Bigr)(P+iQ)=\frac{\partial P}{\partial x}+i\frac{\partial Q}{\partial x}+i\frac{\partial P}{\partial y}-\frac{\partial Q}{\partial y}=\Bigl(\frac{\partial P}{\partial x}-\frac{\partial Q}{\partial y}\Bigr)+i\Bigl(\frac{\partial P}{\partial y}+\frac{\partial Q}{\partial x}\Bigr),
$$
où les deux parenthèses sont réelles. Donc $\frac{\partial f}{\partial\bar z}(z)=0$ équivaut à l'annulation des deux, c'est-à-dire à (I.2.6). $\square$

## Preuve à trous

Comme $f$ est différentiable en $z$, on a la décomposition <trou indice="formule (I.2.4)">$df_z(\omega)=\frac{\partial f}{\partial z}(z)\,\omega+\frac{\partial f}{\partial\bar z}(z)\,\bar\omega$</trou>. Par le lemme I.2.1, $df_z$ est $\C$-linéaire si et seulement si <trou>le coefficient de $\bar\omega$ est nul : $\frac{\partial f}{\partial\bar z}(z)=0$, et $df_z$ est alors la multiplication par $\frac{\partial f}{\partial z}(z)$</trou>. Par <trou indice="lien entre C-dérivabilité et différentielle">la proposition I.2.3, $f$ est $\C$-dérivable en $z$ si et seulement si $df_z$ est $\C$-linéaire, et alors $df_z$ est la multiplication par $f'(z)$</trou> ; d'où l'équivalence et $f'(z)=\frac{\partial f}{\partial z}(z)$. Enfin
$$
2\frac{\partial f}{\partial\bar z}=\Bigl(\frac{\partial P}{\partial x}-\frac{\partial Q}{\partial y}\Bigr)+i\Bigl(\frac{\partial P}{\partial y}+\frac{\partial Q}{\partial x}\Bigr),
$$
avec <trou>deux parenthèses réelles</trou>, donc (I.2.5) $\iff$ (I.2.6). $\square$

## Exemples

* **L'exponentielle.** $e^{z}=e^x\cos y+i\,e^x\sin y$, donc $P=e^x\cos y$, $Q=e^x\sin y$, fonctions $C^1$ (donc $f$ différentiable). On a $\frac{\partial P}{\partial x}=e^x\cos y=\frac{\partial Q}{\partial y}$ et $\frac{\partial P}{\partial y}=-e^x\sin y=-\frac{\partial Q}{\partial x}$ : Cauchy–Riemann partout, $\exp$ est $\C$-dérivable sur $\C$. Comme $\frac{\partial f}{\partial\bar z}=0$, on a $\frac{\partial f}{\partial y}=i\frac{\partial f}{\partial x}$ et donc $f'=\frac{\partial f}{\partial z}=\frac{\partial f}{\partial x}=\frac{\partial P}{\partial x}+i\frac{\partial Q}{\partial x}=e^x(\cos y+i\sin y)=e^z$.
* **Où $f(x+iy)=x^2+iy^2$ est-elle $\C$-dérivable ?** $P=x^2$, $Q=y^2$, $C^1$. Conditions : $\frac{\partial P}{\partial x}=2x=2y=\frac{\partial Q}{\partial y}$ et $\frac{\partial P}{\partial y}=0=-\frac{\partial Q}{\partial x}$. Donc $f$ est $\C$-dérivable exactement sur la droite $\{x=y\}$, avec $f'(x+ix)=\frac{\partial P}{\partial x}+i\frac{\partial Q}{\partial x}=2x$. Cette droite est d'intérieur vide : $f$ n'est holomorphe sur aucun ouvert non vide.
* **Test par $\partial/\partial\bar z$.** Avec les règles de calcul (I.2.10)–(I.2.11) ([[ch01-formulaire-dz-dzbar]]) : $\frac{\partial}{\partial\bar z}(z\bar z)=z$, nul seulement en $0$ ; $\frac{\partial}{\partial\bar z}\Re(z)=\frac{\partial}{\partial\bar z}\frac{z+\bar z}2=\frac12\ne0$. D'où : $|z|^2$ n'est $\C$-dérivable qu'en $0$, $\Re z$ nulle part ([[ch01-exemple-zbar-rez-module]]).

## Pièges

* > ⚠️ **La différentiabilité est une hypothèse, pas une conséquence** : vérifier (I.2.6) sur des dérivées partielles qui existent ne suffit pas (contre-exemples $\bar z^{\,2}/z$ et $e^{-z^{-4}}$ en $0$). En pratique on montre que $P$ et $Q$ ont des dérivées partielles **continues** (donc $f$ est $C^1$, donc différentiable) avant d'appliquer le critère.
* > ⚠️ Signe : c'est $\frac{\partial P}{\partial y}=-\frac{\partial Q}{\partial x}$ (le moins est sur la dérivée croisée). Contrôle avec $f=z$ : $P=x$, $Q=y$, $\frac{\partial P}{\partial x}=1=\frac{\partial Q}{\partial y}$ ; avec $f=iz$ : $P=-y$, $Q=x$, $\frac{\partial P}{\partial y}=-1=-\frac{\partial Q}{\partial x}$.
* Cauchy–Riemann **en un point** donne la $\C$-dérivabilité en ce point seulement ; l'holomorphie demande (I.2.5) **en tout point d'un ouvert** et $f$ de classe $C^1$ ([[ch01-holomorphe-ssi-c1-et-dzbar-nul]]).
* (I.2.7) : $f'(z)=\frac{\partial f}{\partial z}(z)=\frac{\partial f}{\partial x}(z)=-i\frac{\partial f}{\partial y}(z)$ **sous** Cauchy–Riemann seulement ; en général $\frac{\partial f}{\partial z}$ n'est pas une dérivée de $f$ au sens complexe (pour $|z|^2$, $\frac{\partial f}{\partial z}=\bar z$ partout, alors que $f$ n'est $\C$-dérivable qu'en $0$).
* Ne pas écrire Cauchy–Riemann pour $f$ et $\bar f$ en même temps : si $f$ et $\bar f$ sont toutes deux $\C$-dérivables sur un ouvert connexe, $\frac{\partial f}{\partial z}=\overline{\partial \bar f/\partial\bar z}=0$ et $\frac{\partial f}{\partial\bar z}=0$, donc $df=0$ et $f$ est constante.
