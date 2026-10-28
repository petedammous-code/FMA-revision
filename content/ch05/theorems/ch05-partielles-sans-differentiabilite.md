---
id: ch05-partielles-sans-differentiabilite
type: proposition
chapter: 5
title: L'existence des dérivées partielles n'implique pas la différentiabilité
ref: Remarque V.3.18
page: 102
importance: 2
depends: [ch05-differentielles-partielles, ch05-differentiable-implique-continue, ch05-derivee-directionnelle-unicite]
tags: [derivees-partielles, differentiabilite, contre-exemple, derivee-directionnelle]
---
## Intuition

> 💡 Les dérivées partielles en $a$ ne regardent $f$ que **le long de deux droites** (les axes passant par $a$) : elles ignorent complètement ce qui se passe dans les autres directions. Une fonction peut être parfaitement plate sur les deux axes et faire n'importe quoi ailleurs, par exemple valoir $\tfrac12$ sur toute la diagonale privée de l'origine. Elle a alors des dérivées partielles nulles en $0$, mais n'est même pas continue en $0$.

Rappels. Si $E=E_1\times\cdots\times E_m$ et $a=(a_1,\dots,a_m)$, l'**application partielle** $f_{[i]}$ fige toutes les variables sauf la $i$-ème ; la **dérivée partielle** $\frac{\partial f}{\partial x_i}(a)$ est la différentielle de $f_{[i]}$ en $a_i$ quand elle existe ([[ch05-differentielles-partielles]]). La Proposition V.3.17 dit : $f$ différentiable en $a$ $\Rightarrow$ les dérivées partielles existent et $df_a(h)=\sum_i\frac{\partial f}{\partial x_i}(a)(h_i)$. La présente fiche dit que **la réciproque est fausse**. Être **différentiable en $a$**, c'est admettre une application linéaire continue $df_a$ avec $f(a+h)=f(a)+df_a(h)+o(h)$ ([[ch05-differentielle-def]]).

## Énoncé

**Proposition (poly, Remarque V.3.18, p. 102).** Contrairement à la Proposition V.3.15 (différentiabilité d'une application à valeurs dans un produit, qui est une **équivalence**), la Proposition V.3.17 n'établit qu'une **implication** : il est faux d'affirmer que l'existence des différentielles partielles de $f$ en un point implique la différentiabilité de $f$ en ce point.

Précisément : la fonction $f:\R^2\to\R$ définie par
$$
f(x,y)=\begin{cases}\dfrac{xy}{x^2+y^2} & \text{si }(x,y)\neq(0,0),\\ 0 & \text{si }(x,y)=(0,0),\end{cases}
$$
admet des dérivées partielles en tout point de $\R^2$, avec $\frac{\partial f}{\partial x}(0,0)=\frac{\partial f}{\partial y}(0,0)=0$, mais elle n'est pas continue en $(0,0)$, donc pas différentiable en $(0,0)$.

(Le poly annonce le retour sur cette question en section V.5 : la Proposition V.5.1, [[ch05-c1-ssi-partielles-continues]], donne la réciproque **si les dérivées partielles existent au voisinage de $a$ et sont continues en $a$**.)

## Hypothèses

### H1 — Au moins deux variables ($m\ge2$)

**Rôle.** Le phénomène vient du fait que les dérivées partielles ne voient que les directions des facteurs $E_i$ ; il faut au moins deux facteurs pour qu'il existe des directions « non vues ».

**Si on la retire.** Pour $m=1$, l'unique application partielle est $f$ elle-même, donc « $\frac{\partial f}{\partial x_1}(a)$ existe » signifie exactement « $f$ est différentiable en $a$ » : l'équivalence est alors vraie, il n'y a pas de contre-exemple.

### H2 — Les dérivées partielles existent seulement, sans continuité

**Rôle.** C'est précisément l'absence d'hypothèse de régularité sur les dérivées partielles qui autorise le contre-exemple : dans l'exemple ci-dessus, $\frac{\partial f}{\partial x}$ existe partout mais n'est pas continue (ni même bornée) au voisinage de $0$.

**Si on la retire.** Si l'on ajoute « les dérivées partielles existent sur un voisinage de $a$ et sont continues en $a$ », alors $f$ **est** différentiable en $a$ (poly, Proposition V.5.1, p. 106, [[ch05-c1-ssi-partielles-continues]]). La remarque cesse donc d'être vraie sous cette hypothèse renforcée.

## Idée de la preuve

On calcule les dérivées partielles en $0$ sur les axes, où $f$ est identiquement nulle. Puis on restreint $f$ à la diagonale : $f(t,t)=\tfrac12$ pour $t\neq0$, donc $f$ n'est pas continue en $0$, alors qu'une fonction différentiable en un point y est continue.

## Preuve

*Dérivées partielles en dehors de l'origine.* Sur l'ouvert $\R^2\setminus\{0\}$, $f$ est une fraction rationnelle dont le dénominateur ne s'annule pas : ses applications partielles sont dérivables, avec
$$
\frac{\partial f}{\partial x}(x,y)=\frac{y(x^2+y^2)-xy\cdot2x}{(x^2+y^2)^2}=\frac{y(y^2-x^2)}{(x^2+y^2)^2},\qquad \frac{\partial f}{\partial y}(x,y)=\frac{x(x^2-y^2)}{(x^2+y^2)^2}.
$$

*Dérivées partielles à l'origine.* L'application partielle $f_{[1]}:x\mapsto f(x,0)$ vaut $0$ pour $x\neq0$ (car $x\cdot0=0$) et $0$ en $x=0$ : elle est identiquement nulle, donc dérivable en $0$ de dérivée nulle, d'où $\frac{\partial f}{\partial x}(0,0)=0$. De même $f_{[2]}:y\mapsto f(0,y)$ est identiquement nulle et $\frac{\partial f}{\partial y}(0,0)=0$.

*Non-continuité en $0$.* Pour $t\neq0$, $f(t,t)=\dfrac{t^2}{2t^2}=\dfrac12$. Ainsi $(t,t)\to(0,0)$ quand $t\to0$ mais $f(t,t)\to\tfrac12\neq0=f(0,0)$ : $f$ n'est pas continue en $(0,0)$.

*Conclusion.* Une application différentiable en un point est continue en ce point (poly, Remarque V.3.2, p. 98, [[ch05-differentiable-implique-continue]]). Donc $f$ n'est pas différentiable en $(0,0)$, bien que ses deux dérivées partielles y existent. L'implication de la Proposition V.3.17 ([[ch05-differentielles-partielles]]) n'est donc pas une équivalence. $\square$

*Variante (sans passer par la continuité).* Si $f$ était différentiable en $0$, la formule (V.3.3) donnerait $df_0(h)=\frac{\partial f}{\partial x}(0,0)\,h_1+\frac{\partial f}{\partial y}(0,0)\,h_2=0$ pour tout $h=(h_1,h_2)$, et la dérivée directionnelle $\lim_{t\to0}\frac{f(th)-f(0)}{t}$ vaudrait $df_0(h)=0$ pour tout $h$ ([[ch05-derivee-directionnelle-unicite]]). Or pour $h=(1,1)$, $\frac{f(t,t)-f(0,0)}{t}=\frac{1}{2t}$ n'a pas de limite finie : contradiction.

## Preuve à trous

Soit $f(x,y)=\frac{xy}{x^2+y^2}$ hors de l'origine, $f(0,0)=0$. Sur les axes, <trou indice="que vaut f(x,0) ?">$f(x,0)=0$ et $f(0,y)=0$ pour tous $x,y$, donc les applications partielles en $0$ sont identiquement nulles</trou>, d'où $\frac{\partial f}{\partial x}(0,0)=\frac{\partial f}{\partial y}(0,0)=0$. Mais sur la diagonale, <trou indice="restreindre f à la droite y = x">$f(t,t)=\frac12$ pour tout $t\neq0$</trou>, donc $f$ n'est pas continue en $(0,0)$. Comme <trou indice="Remarque V.3.2">une application différentiable en un point est continue en ce point</trou>, $f$ n'est pas différentiable en $(0,0)$. $\square$

## Exemples

* **Le contre-exemple de l'énoncé, côté dérivées partielles.** On a $\frac{\partial f}{\partial x}(0,y)=\frac{y\cdot y^2}{y^4}=\frac1y$ pour $y\neq0$ : la dérivée partielle existe partout mais n'est pas bornée près de $0$, ce qui est cohérent avec [[ch05-c1-ssi-partielles-continues]] (si elle était continue en $0$, $f$ serait différentiable en $0$).
* **Plus fort : toutes les dérivées directionnelles existent, et pourtant $f$ n'est pas continue.** Soit $g(x,y)=\frac{x^2y}{x^4+y^2}$ hors de $0$, $g(0,0)=0$. Pour $h=(h_1,h_2)$ et $t\neq0$ : $\frac{g(th)}{t}=\frac{t^3h_1^2h_2}{t(t^4h_1^4+t^2h_2^2)}=\frac{h_1^2h_2}{t^2h_1^4+h_2^2}$, qui tend vers $\frac{h_1^2}{h_2}$ si $h_2\neq0$ et vaut $0$ si $h_2=0$. Toutes les dérivées directionnelles en $0$ existent. Pourtant $g(t,t^2)=\frac{t^4}{2t^4}=\frac12$ pour $t\neq0$ : $g$ n'est pas continue en $0$ (le long de la parabole $y=x^2$).
* **Continue, dérivées directionnelles partout, mais pas différentiable.** Soit $k(x,y)=\frac{x^3}{x^2+y^2}$ hors de $0$, $k(0,0)=0$. On a $|k(x,y)|\le|x|$, donc $k$ est continue en $0$. Pour $h\neq0$, $\frac{k(th)}{t}=\frac{h_1^3}{h_1^2+h_2^2}=:\varphi(h)$ (indépendant de $t$). Si $k$ était différentiable en $0$, $\varphi$ serait égale à $dk_0$, donc linéaire ; or $\varphi(1,0)=1$, $\varphi(0,1)=0$ et $\varphi(1,1)=\frac12\neq\varphi(1,0)+\varphi(0,1)$. Donc $k$ n'est pas différentiable en $0$.

## Pièges

* > ⚠️ Pour montrer qu'une fonction est différentiable, **calculer les dérivées partielles ne suffit pas**. Il faut soit vérifier la définition ($f(a+h)-f(a)-L(h)=o(h)$ avec $L$ le candidat donné par les dérivées partielles), soit invoquer la continuité des dérivées partielles ([[ch05-c1-ssi-partielles-continues]]), soit des théorèmes d'opérations (somme, composée, produit).
* Même l'existence de **toutes** les dérivées directionnelles n'implique ni la différentiabilité ni même la continuité (fonction $g$ ci-dessus).
* Méthode type pour réfuter la différentiabilité en $0$ : (1) montrer la non-continuité en restreignant à une courbe bien choisie (droite, parabole) ; ou (2) montrer que $h\mapsto\lim_{t\to0}\frac{f(th)-f(0)}{t}$ n'est pas linéaire ; ou (3) calculer le candidat $L$ par les dérivées partielles et montrer que $\frac{f(h)-f(0)-L(h)}{\|h\|}\not\to0$.
* Ne pas confondre avec la Proposition V.3.15 ([[ch05-differentiabilite-composantes]]) : pour les **composantes** d'une fonction à valeurs dans un produit (découpage de l'**arrivée**), il y a bien équivalence ; pour les **variables** (découpage du **départ**), seulement une implication.
