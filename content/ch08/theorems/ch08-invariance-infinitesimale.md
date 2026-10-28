---
id: ch08-invariance-infinitesimale
type: lemma
chapter: 8
title: "Forme infinitésimale de l'invariance : $\frac{\partial L}{\partial q}(u,q,v)\cdot X(q)+\frac{\partial L}{\partial v}(u,q,v)\cdot dX_q(v)=0$"
ref: "Question 11, p. 145 (non numérotée, section VIII)"
page: 145
importance: 2
depends: [ch08-groupe-un-parametre-invariance, ch05-composition-differentielles, ch05-differentielles-partielles, ch05-lemme-schwarz, ch07-champ-vecteurs-courbe-integrale-def, ch07-flot-global-ouvert-regulier]
tags: [noether, invariance, flot, schwarz, derivation-par-rapport-au-parametre]
---
## Intuition

> 💡 Si une quantité ne change pas quand on fait agir $F_s$ pour **tout** $s$, sa dérivée par rapport à $s$ est nulle, en particulier en $s=0$. Or, en $s=0$, $F_s$ « pousse » la position $q$ dans la direction $X(q)$ et la vitesse $v$ dans la direction $dX_q(v)$. L'invariance devient donc une identité **linéaire** : la variation de $L$ dans la direction $(X(q),dX_q(v))$ est nulle.

C'est l'invariance « à l'ordre 1 », ou **infinitésimale** : on remplace une famille de transformations par son générateur, le champ $X$. C'est cette identité, évaluée le long d'une solution d'Euler-Lagrange, qui donne le théorème de Noether ([[ch08-noether]]).

Rappels : $(F_s)$ est le flot du champ $X$, $L$ est invariant au sens de [[ch08-groupe-un-parametre-invariance]] ; $\frac{\partial L}{\partial q}(u,q,v)$ et $\frac{\partial L}{\partial v}(u,q,v)$ sont les **différentielles partielles** de $L$ ([[ch05-differentielles-partielles]]), formes linéaires sur $V$ ; $dX_q\in\mathcal L(V;V)$ est la différentielle de $X$ en $q$.

## Énoncé

**Lemme (poly, Question 11, p. 145).** Soit $L$ un Lagrangien de classe $C^1$ sur $I\times\mathcal U\times V$ ($\mathcal U$ ouvert de $V$), $X$ un champ de vecteurs $C^\infty$ autonome sur $\mathcal U$ dont le flot $F$ est défini sur $\R\times\mathcal U$, et supposons $L$ invariant sous l'action de $(F_s)_{s\in\R}$ :
$$
\forall s\in\R,\ \forall(u,q,v)\in I\times\mathcal U\times V,\qquad L\big(u,F_s(q),d(F_s)_q(v)\big)=L(u,q,v).
$$
En dérivant cette identité par rapport à $s$ et en évaluant en $s=0$, on obtient : pour tout $(u,q,v)\in I\times\mathcal U\times V$,
$$
\frac{\partial L}{\partial q}(u,q,v)\cdot X(q)+\frac{\partial L}{\partial v}(u,q,v)\cdot dX_q(v)=0,
$$
en utilisant $\frac{\partial F}{\partial s}(0,q)=X(q)$ et $\frac{\partial}{\partial s}\big[d(F_s)_q(v)\big]_{|s=0}=d\Big(\frac{\partial F}{\partial s}(0,\cdot)\Big)_q(v)=dX_q(v)$.

## Hypothèses

### H1 — $L$ de classe $C^1$

**Rôle.** Elle permet de dériver $s\mapsto L(u,F_s(q),d(F_s)_q(v))$ par la règle de la chaîne ([[ch05-composition-differentielles]]) et de faire apparaître les différentielles partielles.

**Si on la retire.** L'identité n'a plus de sens : $L(u,q,v)=\norm v$ (dans $\R^2$) est invariant par les rotations ($\norm{R_sv}=\norm v$) mais n'est pas différentiable en $v=0$, et $\frac{\partial L}{\partial v}(u,q,0)$ n'existe pas.

### H2 — $F$ de classe $C^2$ (garanti par $X$ de classe $C^\infty$)

**Rôle.** On doit dériver en $s$ la différentielle en $q$, $d(F_s)_q=\frac{\partial F}{\partial x}(s,q)$, et échanger les deux dérivations : c'est le lemme de Schwarz ([[ch05-lemme-schwarz]]), qui exige $F$ deux fois différentiable. Le flot d'un champ $C^\infty$ est $C^\infty$ ([[ch07-flot-global-ouvert-regulier]]).

**Si on la retire.** Hypothèse de confort : $X$ de classe $C^2$ suffit à la preuve ci-dessous ($F$ est alors $C^2$). Pour $X$ seulement $C^1$, le résultat reste vrai (la dérivée $\frac{\partial}{\partial s}\frac{\partial F}{\partial x}$ existe et vaut $dX_{F}\circ\frac{\partial F}{\partial x}$ : « équation linéarisée », résultat classique hors poly), mais la preuve change.

### H3 — Invariance pour tout $s$ (au moins pour $s$ voisin de $0$)

**Rôle.** C'est ce qui rend constante la fonction $g(s)=L(u,F_s(q),d(F_s)_q(v))$, donc $g'(0)=0$. Seul un voisinage de $s=0$ sert : un flot local suffirait.

**Si on la retire.** L'identité est fausse en général. $V=\R^2$, rotations $X(x,y)=(-y,x)$ (donc $dX_q=J$, $J(a,b)=(-b,a)$), $L=\tfrac12\norm v^2-U(q)$ avec $U(x,y)=x^2+2y^2$ (non invariant par rotation). Alors $\frac{\partial L}{\partial v}\cdot dX_q(v)=\langle v,Jv\rangle=0$ et $\frac{\partial L}{\partial q}\cdot X(q)=-\langle\nabla U(q),Jq\rangle=-\big(2x\cdot(-y)+4y\cdot x\big)=-2xy$, non nul dès que $xy\ne0$.

## Idée de la preuve

On fixe $(u,q,v)$ et l'on dérive en $s=0$ la fonction constante $g(s)=L\big(u,F(s,q),\frac{\partial F}{\partial x}(s,q)(v)\big)$ par la règle de la chaîne ; la dérivée de $s\mapsto F(s,q)$ en $0$ est $X(q)$, et celle de $s\mapsto\frac{\partial F}{\partial x}(s,q)(v)$ est $dX_q(v)$ par Schwarz.

## Preuve

Fixons $(u,q,v)\in I\times\mathcal U\times V$. Notons $\frac{\partial F}{\partial x}(s,x)\in\mathcal L(V;V)$ la différentielle partielle de $F$ par rapport à la variable d'espace, de sorte que $d(F_s)_q=\frac{\partial F}{\partial x}(s,q)$. Considérons
$$
g:\R\to\R,\qquad g(s)=L\Big(u,\ F(s,q),\ \frac{\partial F}{\partial x}(s,q)(v)\Big).
$$
Par hypothèse d'invariance, $g(s)=L(u,q,v)$ pour tout $s$ : $g$ est constante, donc $g'(0)=0$ dès que $g$ est dérivable.

*Étape 1 : dérivée de la composante position.* L'application $c:s\mapsto F(s,q)$ est la courbe intégrale de $X$ issue de $q$ ([[ch07-champ-vecteurs-courbe-integrale-def]]) : elle est dérivable, avec $c'(s)=\frac{\partial F}{\partial s}(s,q)=X(F(s,q))$, et $c(0)=F(0,q)=q$, donc $c'(0)=X(q)$.

*Étape 2 : dérivée de la composante vitesse.* Comme $X$ est $C^\infty$, $F$ est de classe $C^\infty$ sur l'ouvert $\R\times\mathcal U$ ([[ch07-flot-global-ouvert-regulier]]), en particulier $C^2$. L'application $w:s\mapsto\frac{\partial F}{\partial x}(s,q)(v)$ est donc dérivable et, d'après le lemme de Schwarz ([[ch05-lemme-schwarz]]) appliqué à $F$ au point $(s,q)$ avec les directions $(1,0)$ et $(0,v)$ de $\R\times V$,
$$
w'(s)=\frac{\partial}{\partial s}\Big[\frac{\partial F}{\partial x}(s,q)(v)\Big]=d^2F_{(s,q)}\big((1,0),(0,v)\big)=d^2F_{(s,q)}\big((0,v),(1,0)\big)=\frac{\partial}{\partial x}\Big[\frac{\partial F}{\partial s}\Big](s,q)(v).
$$
Or $\frac{\partial F}{\partial s}(s,x)=X(F(s,x))$ pour tout $x\in\mathcal U$ ; par la règle de la chaîne, $\frac{\partial}{\partial x}\big[\frac{\partial F}{\partial s}\big](s,q)=dX_{F(s,q)}\circ\frac{\partial F}{\partial x}(s,q)$. En $s=0$ : $F(0,\cdot)=\mathrm{Id}_{\mathcal U}$, donc $\frac{\partial F}{\partial x}(0,q)=\mathrm{Id}_V$ et
$$
w(0)=v,\qquad w'(0)=dX_q(v).
$$

*Étape 3 : règle de la chaîne pour $g$.* On a $g(s)=L(u,c(s),w(s))$ avec $L$ de classe $C^1$ et $c,w$ dérivables. Par la règle de la chaîne ([[ch05-composition-differentielles]]) et la décomposition de $dL$ en différentielles partielles ([[ch05-differentielles-partielles]]), la première variable $u$ étant fixe,
$$
g'(0)=\frac{\partial L}{\partial q}\big(u,c(0),w(0)\big)\cdot c'(0)+\frac{\partial L}{\partial v}\big(u,c(0),w(0)\big)\cdot w'(0)=\frac{\partial L}{\partial q}(u,q,v)\cdot X(q)+\frac{\partial L}{\partial v}(u,q,v)\cdot dX_q(v).
$$
Comme $g'(0)=0$, on obtient l'identité annoncée. $\square$

## Preuve à trous

Fixons $(u,q,v)$ et posons $g(s)=L\big(u,F(s,q),\frac{\partial F}{\partial x}(s,q)(v)\big)$, qui est <trou indice="hypothèse d'invariance">constante, égale à $L(u,q,v)$, donc $g'(0)=0$</trou>.
La courbe $s\mapsto F(s,q)$ vaut $q$ en $0$ et a pour dérivée en $0$ <trou indice="définition d'une courbe intégrale">$\frac{\partial F}{\partial s}(0,q)=X(F(0,q))=X(q)$</trou>.
La courbe $s\mapsto\frac{\partial F}{\partial x}(s,q)(v)$ vaut $v$ en $0$, et sa dérivée est, <trou indice="F est C^2 : on peut échanger les dérivations">par le lemme de Schwarz, $\frac{\partial}{\partial x}\big[\frac{\partial F}{\partial s}\big](s,q)(v)=dX_{F(s,q)}\big(\frac{\partial F}{\partial x}(s,q)(v)\big)$, qui vaut $dX_q(v)$ en $s=0$</trou>.
La règle de la chaîne donne alors <trou>$0=g'(0)=\frac{\partial L}{\partial q}(u,q,v)\cdot X(q)+\frac{\partial L}{\partial v}(u,q,v)\cdot dX_q(v)$</trou>. $\square$

## Exemples

* **Translations.** $X\equiv e$, donc $dX_q=0$ : l'identité se réduit à $\frac{\partial L}{\partial q}(u,q,v)\cdot e=0$ (« $L$ ne dépend pas de $q$ dans la direction $e$ »). Pour $L=\tfrac12\norm v^2-U(q)$ : $\langle\nabla U(q),e\rangle=0$.
* **Rotations du plan.** $X(q)=Jq$ avec $J(x,y)=(-y,x)$, $dX_q=J$. Pour $L=\tfrac12\norm v^2-W(\norm q)$ (potentiel central, invariant) : $\frac{\partial L}{\partial q}\cdot Jq=-W'(\norm q)\big\langle\frac q{\norm q},Jq\big\rangle=0$ et $\frac{\partial L}{\partial v}\cdot Jv=\langle v,Jv\rangle=0$ : chaque terme est nul. Avec le potentiel non symétrique $U(x,y)=x^2+2y^2$, on trouve $-2xy\ne0$ (H3) : l'identité **détecte** l'absence de symétrie.
* **Dilatations.** $X(q)=q$, $dX_q=\mathrm{Id}$, $L=\frac{\norm v^2}{\norm q^2}$ sur $V\setminus\{0\}$. Alors $\frac{\partial L}{\partial q}\cdot q=-\frac{2\norm v^2\langle q,q\rangle}{\norm q^4}=-\frac{2\norm v^2}{\norm q^2}$ et $\frac{\partial L}{\partial v}\cdot v=\frac{2\langle v,v\rangle}{\norm q^2}=\frac{2\norm v^2}{\norm q^2}$ : la somme est bien nulle, alors qu'aucun des deux termes ne l'est.

## Pièges

* > ⚠️ $\frac{\partial}{\partial s}\big[d(F_s)_q(v)\big]$ ne se calcule pas « à $q$ fixé comme une différentielle » : il faut voir $(s,x)\mapsto F(s,x)$ comme une fonction de deux variables et **échanger** $\partial_s$ et $\partial_x$ (Schwarz), ce qui exige $F$ de classe $C^2$.
* Le terme $\frac{\partial L}{\partial v}\cdot dX_q(v)$ est souvent oublié : il vient du transport de la vitesse. Il est nul pour les translations ($dX=0$), pas en général (dilatations).
* La conclusion est une identité en **tout** point $(u,q,v)$ de $I\times\mathcal U\times V$, pas seulement le long d'une courbe ; on l'évalue en $(t,\gamma(t),\gamma'(t))$ dans [[ch08-noether]].
* La réciproque est vraie aussi (hors poly) : si l'identité infinitésimale a lieu partout, $\frac{d}{ds}L(u,F_s(q),d(F_s)_q(v))$ est l'identité infinitésimale évaluée au point $(u,F_s(q),d(F_s)_q(v))$, donc nulle, et $L$ est invariant. Elle n'est pas demandée.
