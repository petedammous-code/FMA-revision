---
id: ex-ch05-radiale-gradient
type: exercise
chapters: [5]
title: Un gradient toujours radial force la fonction à être radiale
source: Inventé
difficulty: 2
time: 25
tools: [ch05-gradient-hilbert, ch05-composition-differentielles, ch05-formule-leibniz, ch05-vecteur-tangent-courbe, ch05-accroissements-finis-borne, ch05-derivee-variable-reelle]
---
## Énoncé

Soit $n\ge2$. On munit $\R^n$ du produit scalaire usuel $\langle\cdot,\cdot\rangle$ et de la norme associée $\norm{\cdot}$, et l'on pose $U=\R^n\setminus\{0\}$. Pour $r>0$, on note $S_r=\{x\in\R^n : \norm{x}=r\}$ la sphère de rayon $r$.

Soit $f:U\to\R$ une fonction de classe $C^1$ telle que, pour tout $x\in U$, le gradient $\nabla f(x)$ soit colinéaire à $x$ : il existe un réel $\lambda(x)$ avec $\nabla f(x)=\lambda(x)\,x$.

1. Soit $I$ un intervalle ouvert de $\R$ et $\gamma:I\to U$ une application de classe $C^1$ telle que $\norm{\gamma(t)}$ ne dépende pas de $t$. Montrer que $\langle\gamma(t),\gamma'(t)\rangle=0$ pour tout $t\in I$, puis que $f\circ\gamma$ est constante sur $I$.
2. Soient $r>0$ et $x,y\in S_r$. Montrer qu'il existe une application $\gamma$ comme en 1, définie sur un intervalle ouvert contenant $[0,1]$, avec $\gamma(0)=x$ et $\gamma(1)=y$ (on distinguera les cas $y\ne-x$ et $y=-x$). En déduire que $f$ est constante sur chaque sphère $S_r$.
3. Montrer qu'il existe une fonction $\varphi:\,]0,+\infty[\,\to\R$ de classe $C^1$ telle que $f(x)=\varphi(\norm x)$ pour tout $x\in U$. Réciproquement, montrer que toute fonction de cette forme vérifie l'hypothèse, et exprimer $\lambda(x)$ à l'aide de $\varphi$.
4. Déterminer toutes les fonctions $f$ de classe $C^1$ sur $U$ telles que $\nabla f(x)=\dfrac{x}{\norm x^3}$ pour tout $x\in U$.
5. Que devient le résultat de la question 3 lorsque $n=1$ ? Quel argument de la question 2 tombe en défaut ?

## Indices

### Indice 1
Pour 1, dériver $t\mapsto\norm{\gamma(t)}^2=\langle\gamma(t),\gamma(t)\rangle$ (produit scalaire = application bilinéaire), puis dériver $f\circ\gamma$ par la règle de la chaîne et écrire $df_x(h)=\langle\nabla f(x),h\rangle$.

### Indice 2
Pour 2, si $y\ne-x$, normaliser le segment : $\gamma(t)=r\,\dfrac{(1-t)x+ty}{\norm{(1-t)x+ty}}$. Vérifier que le dénominateur ne s'annule pas. Si $y=-x$, passer par un point intermédiaire de $S_r$ orthogonal à $x$ (c'est ici que $n\ge2$ sert).

### Indice 3
Pour 3, poser $\varphi(r)=f(re_1)$ où $e_1=(1,0,\dots,0)$, et remarquer que $x$ et $\norm{x}e_1$ sont sur la même sphère. Pour la réciproque et pour 4, calculer $\nabla N(x)$ où $N(x)=\norm{x}$.

## Corrigé

**Rappel.** Pour $x\in U$, $df_x(h)=\langle\nabla f(x),h\rangle$ pour tout $h$ (définition du gradient, [[ch05-gradient-hilbert]] ; $\R^n$ euclidien est un espace de Hilbert).

**1.** *Orthogonalité.* La fonction $q(t)=\norm{\gamma(t)}^2=\langle\gamma(t),\gamma(t)\rangle$ est la composée de $t\mapsto(\gamma(t),\gamma(t))$ et de l'application bilinéaire continue $\langle\cdot,\cdot\rangle$. Par la formule de Leibniz ([[ch05-formule-leibniz]]), $q$ est dérivable et $q'(t)=\langle\gamma'(t),\gamma(t)\rangle+\langle\gamma(t),\gamma'(t)\rangle=2\langle\gamma(t),\gamma'(t)\rangle$. Or $q$ est constante par hypothèse, donc $q'=0$ et $\langle\gamma(t),\gamma'(t)\rangle=0$.

*$f\circ\gamma$ est constante.* $\gamma$ est dérivable en $t$ et $f$ est différentiable en $\gamma(t)\in U$, donc par la règle de la chaîne ([[ch05-composition-differentielles]], sous la forme de la Remarque V.3.13, [[ch05-vecteur-tangent-courbe]]) :
$$
(f\circ\gamma)'(t)=df_{\gamma(t)}\big(\gamma'(t)\big)=\big\langle\nabla f(\gamma(t)),\gamma'(t)\big\rangle=\lambda(\gamma(t))\,\big\langle\gamma(t),\gamma'(t)\big\rangle=0 .
$$
Une fonction réelle de dérivée nulle sur un intervalle est constante (accroissements finis avec borne $k=0$, [[ch05-accroissements-finis-borne]], appliqué sur tout segment $[s,t]\subset I$).

**2.** *Cas $y\ne-x$.* Posons $u(t)=(1-t)x+ty$ pour $t\in\R$. Si $u(t)=0$, alors $(1-t)x=-ty$ ; en prenant les normes, $|1-t|\,r=|t|\,r$, donc $t=\frac12$, et alors $x=-y$, exclu. Donc $u(t)\ne0$ pour tout $t\in\R$. L'application $g:U\to U$, $g(v)=r\,v/\norm v$, est de classe $C^1$ ($N=\norm\cdot$ est $C^1$ sur $U$ comme composée de $v\mapsto\norm v^2$, polynomiale à valeurs dans $]0,+\infty[$, et de la racine carrée, dérivable sur $]0,+\infty[$ ; puis produit et inverse). Donc $\gamma=g\circ u:\R\to U$ est de classe $C^1$, à valeurs dans $S_r$ ($\norm{\gamma(t)}=r$), avec $\gamma(0)=rx/\norm x=x$ et $\gamma(1)=y$.

*Cas $y=-x$.* Comme $n\ge2$, l'orthogonal de $x$ n'est pas réduit à $\{0\}$ : choisissons $z\in S_r$ avec $\langle z,x\rangle=0$. Alors $z\ne-x$ et $-x\ne-z$ (car $z\ne\pm x$, puisque $\langle z,x\rangle=0\ne\pm r^2$). Le cas précédent fournit des chemins de $x$ à $z$ et de $z$ à $y=-x$.

*Conclusion.* Dans le premier cas, la question 1 (avec $I=\R$) donne $f(x)=f(\gamma(0))=f(\gamma(1))=f(y)$. Dans le second, $f(x)=f(z)=f(-x)$. Donc $f$ est constante sur $S_r$.

**3.** *Existence de $\varphi$.* Posons $\varphi(r)=f(re_1)$ pour $r>0$. L'application $r\mapsto re_1$ est affine, à valeurs dans $U$, donc $\varphi$ est $C^1$ comme composée ([[ch05-composition-differentielles]]), avec $\varphi'(r)=df_{re_1}(e_1)$ ([[ch05-derivee-variable-reelle]]). Pour $x\in U$, les points $x$ et $\norm{x}e_1$ sont tous deux sur $S_{\norm x}$, donc par 2, $f(x)=f(\norm x e_1)=\varphi(\norm x)$.

*Réciproque.* Soit $\varphi\in C^1(]0,+\infty[)$ et $f=\varphi\circ N$. Sur $U$, $N$ est $C^1$ et $dN_x(h)=\frac{\langle x,h\rangle}{\norm x}$ (dérivée de $\sqrt{\cdot}$ en $\norm x^2$, soit $\frac1{2\norm x}$, composée avec $d(\norm\cdot^2)_x(h)=2\langle x,h\rangle$). Par la règle de la chaîne,
$$
df_x(h)=\varphi'(\norm x)\,\frac{\langle x,h\rangle}{\norm x},\qquad\text{donc}\qquad \nabla f(x)=\frac{\varphi'(\norm x)}{\norm x}\,x ,
$$
qui est colinéaire à $x$, avec $\lambda(x)=\varphi'(\norm x)/\norm x$. Et $f$ est $C^1$ comme composée d'applications $C^1$.

**4.** Une telle $f$ vérifie l'hypothèse avec $\lambda(x)=\norm x^{-3}$. Par 3, $f=\varphi\circ N$ et, en comparant les deux expressions du gradient en $x=re_1$ : $\varphi'(r)/r=r^{-3}$, soit $\varphi'(r)=r^{-2}$ sur l'intervalle $]0,+\infty[$, d'où $\varphi(r)=c-\frac1r$ pour une constante $c\in\R$. Donc $f(x)=c-\dfrac1{\norm x}$. Réciproquement, ces fonctions conviennent (formule de 3 avec $\varphi'(r)=r^{-2}$). (Pour $n=3$, c'est le potentiel newtonien.)

**5.** Pour $n=1$, $U=\R\setminus\{0\}$ et tout réel est colinéaire à $x\ne0$ : **toute** fonction $C^1$ sur $U$ vérifie l'hypothèse. Par exemple $f(x)=x$ n'est pas de la forme $\varphi(|x|)$, car $f(1)=1\ne-1=f(-1)$. La question 2 tombe en défaut : $S_r=\{-r,r\}$ n'est pas connexe, aucun chemin continu dans $S_r$ ne relie $r$ à $-r$, et l'on ne peut pas trouver de $z\in S_r$ orthogonal à $x$. (De même, la réponse de 4 devient, pour $n=1$, $f(x)=c_\pm-\frac1{|x|}$ avec une constante différente sur chacune des deux composantes connexes $]0,+\infty[$ et $]-\infty,0[$.)

## Pièges et variantes

* Croire que « $f\circ\gamma$ de dérivée nulle » suffit sans dire que $I$ est un **intervalle** (connexe) : sur une réunion d'intervalles, on n'obtient qu'une fonction localement constante.
* Oublier de vérifier que le chemin reste dans $U$ (le dénominateur $\norm{(1-t)x+ty}$ s'annule pour $y=-x$) : c'est le seul point délicat de la question 2.
* Passer de « $f$ constante sur chaque sphère » à « $\varphi$ est $C^1$ » sans justification : il faut exhiber $\varphi$ comme une composée, ici $r\mapsto f(re_1)$.
* Variante : la même preuve marche dans un espace de Hilbert réel $E$ de dimension $\ge2$, éventuellement infinie ($\gamma$ reste dans le plan engendré par $x$ et $y$).
* Variante : si l'on suppose seulement $\nabla f(x)\perp x$ pour tout $x$ (au lieu de colinéaire), on obtient par le même genre d'argument (dériver $t\mapsto f(tx)$) que $f$ est constante sur chaque demi-droite issue de $0$ : $f$ est **homogène de degré $0$**.
