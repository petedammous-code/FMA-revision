---
id: ex-ch07-section-transverse-temps-atteinte
type: exercise
chapters: [7, 6, 5]
title: Temps d'atteinte d'une section transverse
source: "Classique (temps d'arrivée sur une section transverse, première étape de l'application de Poincaré ; cf. Hirsch–Smale–Devaney, *Differential Equations, Dynamical Systems, and an Introduction to Chaos*, ch. 10) — rédaction et exemples inventés"
difficulty: 3
time: 45
tools: [ch07-flot-global-def, ch07-flot-global-ouvert-regulier, ch07-proprietes-flot-formules, ch07-groupe-un-parametre, ch07-translation-temps-autonome, ch06-fonctions-implicites, ch05-composition-differentielles]
---
## Énoncé

Soit $X:\R^n\to\R^n$ un champ de vecteurs (indépendant du temps) de classe $C^1$. Pour $p\in\R^n$, on note $J(p)$ l'intervalle de définition de la courbe intégrale maximale de $X$ valant $p$ en $t=0$, $F(t,p)$ sa valeur au temps $t\in J(p)$, et $D_0=\{(t,p)\in\R\times\R^n : t\in J(p)\}$.

Soit $\varphi:\R^n\to\R$ de classe $C^1$ et $\Sigma=\{q\in\R^n : \varphi(q)=0\}$. On fixe $p_0\in\R^n$ et $T_0\in J(p_0)$ tels que $q_0=F(T_0,p_0)\in\Sigma$, et l'on suppose
$$
d\varphi_{q_0}\big(X(q_0)\big)\neq0\qquad(\text{« le champ traverse } \Sigma \text{ en } q_0 \text{ »}).
$$

1. Montrer qu'il existe un ouvert $V$ contenant $p_0$, un réel $\varepsilon>0$ et une application $\tau:V\to\,]T_0-\varepsilon,T_0+\varepsilon[$ de classe $C^1$ tels que $\tau(p_0)=T_0$, $]T_0-\varepsilon,T_0+\varepsilon[\times V\subset D_0$, et
$$
\forall(t,p)\in\,]T_0-\varepsilon,T_0+\varepsilon[\times V,\qquad F(t,p)\in\Sigma\iff t=\tau(p).
$$
2. Exprimer $d\tau_{p_0}(h)$, pour $h\in\R^n$, à l'aide de $d\varphi_{q_0}$, de $X(q_0)$ et de $\dfrac{\partial F}{\partial p}(T_0,p_0)$ (différentielle partielle de $F$ par rapport à $p$).
3. Soit $p\in V$. Montrer que pour $s$ assez petit, $\tau\big(F(s,p)\big)=\tau(p)-s$. En déduire que $d\tau_p\big(X(p)\big)=-1$.
4. On pose $P(p)=F(\tau(p),p)$ pour $p\in V$. Montrer que $P$ est de classe $C^1$, à valeurs dans $\Sigma$, et que $P$ est constante le long des morceaux de trajectoires contenus dans $V$ ; en déduire $dP_p\big(X(p)\big)=0$.
5. *Exemple.* $n=2$, $X(x,y)=(1,y^2)$, $\varphi(x,y)=y-1$.
   a) Calculer $F(t,(x,y))$ et $J((x,y))$.
   b) On prend $p_0=(0,\tfrac12)$. Déterminer $T_0$ et vérifier l'hypothèse de transversalité. Montrer que, pour tout $p=(x,y)$ avec $y>0$, il existe un unique $t\in J(p)$ tel que $F(t,p)\in\Sigma$, à savoir $\tau(x,y)=\dfrac1y-1$ : le temps d'atteinte est ici défini globalement et de classe $C^1$ sur l'ouvert $\{y>0\}$, et toute fonction $\tau$ fournie par la question 1 en est une restriction. Vérifier sur cet exemple les formules des questions 2 et 3 et calculer $P(x,y)=F\big(\tau(x,y),(x,y)\big)$ pour $y>0$.
6. *Contre-exemple.* $n=2$, $X(x,y)=(1,0)$, $\varphi(x,y)=y-x^2$, $p_0=(-1,0)$, $T_0=1$. Vérifier que $F(T_0,p_0)\in\Sigma$ mais que la transversalité est en défaut, et montrer qu'il n'existe **aucun** voisinage $V$ de $p_0$ et aucune fonction $\tau:V\to\R$ avec $\tau(p_0)=T_0$ et $F(\tau(p),p)\in\Sigma$ pour tout $p\in V$.

## Indices

### Indice 1
On cherche le temps $t$ comme fonction de $p$, défini implicitement par une équation $G(p,t)=0$ : quel théorème ? Quelles sont la régularité de $F$ et la dérivée $\partial F/\partial t$ ?

### Indice 2
Poser $G(p,t)=\varphi\big(F(t,p)\big)$ sur un produit d'ouverts $V_1\times\,]T_0-\varepsilon_1,T_0+\varepsilon_1[$ contenu dans $D_0$ (qui est ouvert). $F$ est $C^1$ (Théorème VII.3.9) et $\partial F/\partial t=X(F)$ (formule VII.3.3), donc $\dfrac{\partial G}{\partial t}(p_0,T_0)=d\varphi_{q_0}(X(q_0))\neq0$ : fonctions implicites.

### Indice 3
Question 3 : propriété de groupe du flot, $F\big(\tau(p)-s,F(s,p)\big)=F(\tau(p),p)\in\Sigma$ ; il reste à vérifier que $\big(\tau(p)-s,F(s,p)\big)$ est dans le domaine $]T_0-\varepsilon,T_0+\varepsilon[\times V$ où l'on a l'unicité de la question 1, puis à dériver en $s=0$.

## Corrigé

**1.** *Régularité.* $X$ est autonome et $C^1$, donc localement lipschitzien ([[ch07-restriction-domaine-c1-lipschitz]]) ; par le Théorème VII.3.9 ([[ch07-flot-global-ouvert-regulier]]), le domaine $D_0$ du flot ([[ch07-flot-global-def]]) est **ouvert** et $F$ est de classe $C^1$ sur $D_0$. Comme $(T_0,p_0)\in D_0$ ouvert, il existe $\varepsilon_1>0$ et un ouvert $V_1\ni p_0$ avec $]T_0-\varepsilon_1,T_0+\varepsilon_1[\times V_1\subset D_0$.

*Fonction implicite.* Sur l'ouvert produit $V_1\times\,]T_0-\varepsilon_1,T_0+\varepsilon_1[$ de $\R^n\times\R$, posons $G(p,t)=\varphi\big(F(t,p)\big)$. Par la règle de la chaîne ([[ch05-composition-differentielles]]), $G$ est de classe $C^1$ et, d'après la formule (VII.3.3) $\dfrac{\partial F}{\partial t}(t,p)=X\big(F(t,p)\big)$ ([[ch07-proprietes-flot-formules]]),
$$
\frac{\partial G}{\partial t}(p,t)=d\varphi_{F(t,p)}\Big(X\big(F(t,p)\big)\Big),\qquad \frac{\partial G}{\partial t}(p_0,T_0)=d\varphi_{q_0}\big(X(q_0)\big)\neq0 .
$$
Une application linéaire $\R\to\R$ non nulle est un isomorphisme (bicontinu). De plus $G(p_0,T_0)=\varphi(q_0)=0$. Le théorème des fonctions implicites ([[ch06-fonctions-implicites]], avec $E=\R^n$, $F=G=\R$, $p=1$) fournit un ouvert $U_0\ni p_0$ de $V_1$, un ouvert $W_0\ni T_0$ de $]T_0-\varepsilon_1,T_0+\varepsilon_1[$ et $\tau:U_0\to W_0$ de classe $C^1$, avec $\tau(p_0)=T_0$ et
$$
\forall(p,t)\in U_0\times W_0,\qquad G(p,t)=0\iff t=\tau(p).
$$
*Ajustement des domaines.* Choisissons $\varepsilon\in\,]0,\varepsilon_1]$ avec $]T_0-\varepsilon,T_0+\varepsilon[\subset W_0$, et posons $V=U_0\cap\tau^{-1}\big(]T_0-\varepsilon,T_0+\varepsilon[\big)$ : c'est un ouvert ($\tau$ continue) contenant $p_0$. Alors $\tau(V)\subset\,]T_0-\varepsilon,T_0+\varepsilon[$, $]T_0-\varepsilon,T_0+\varepsilon[\times V\subset D_0$, et pour $(t,p)$ dans ce produit, $F(t,p)\in\Sigma\iff G(p,t)=0\iff t=\tau(p)$.

**2.** La formule de la différentielle de la fonction implicite donne
$$
d\tau_{p_0}=-\Big(\frac{\partial G}{\partial t}(p_0,T_0)\Big)^{-1}\circ\frac{\partial G}{\partial p}(p_0,T_0),
\qquad\text{soit}\qquad
d\tau_{p_0}(h)=-\,\frac{d\varphi_{q_0}\Big(\dfrac{\partial F}{\partial p}(T_0,p_0)\,h\Big)}{d\varphi_{q_0}\big(X(q_0)\big)} ,
$$
puisque $\dfrac{\partial G}{\partial p}(p_0,T_0)(h)=d\varphi_{q_0}\Big(\dfrac{\partial F}{\partial p}(T_0,p_0)h\Big)$ (règle de la chaîne). Interprétation : on déplace le point de départ de $h$, le point d'arrivée au temps $T_0$ bouge de $\frac{\partial F}{\partial p}h$ ; la composante « normale à $\Sigma$ » de ce déplacement est rattrapée en avançant ou reculant le temps, à la vitesse normale $d\varphi_{q_0}(X(q_0))$.

**3.** Soit $p\in V$. L'application $s\mapsto F(s,p)$ est continue sur $J(p)\ni0$ avec $F(0,p)=p\in V$ ouvert, et $\tau(p)\in\,]T_0-\varepsilon,T_0+\varepsilon[$ ouvert ; il existe donc $s_1>0$ tel que pour $|s|<s_1$ : $s\in J(p)$, $F(s,p)\in V$ et $\tau(p)-s\in\,]T_0-\varepsilon,T_0+\varepsilon[$.

Pour un tel $s$, posons $p'=F(s,p)$. Par le Théorème VII.3.5 ([[ch07-translation-temps-autonome]]), $J(p')=J(p)-s$, donc $\tau(p)-s\in J(p')$ puisque $\tau(p)\in J(p)$ ; et la propriété de groupe (VII.3.1) ([[ch07-groupe-un-parametre]]) donne
$$
F\big(\tau(p)-s,\,p'\big)=F_{\tau(p)-s}\cdot\big(F_s\cdot p\big)=F_{\tau(p)}\cdot p=F(\tau(p),p)\in\Sigma .
$$
Comme $(\tau(p)-s,p')\in\,]T_0-\varepsilon,T_0+\varepsilon[\times V$, l'unicité de la question 1 impose $\tau(p')=\tau(p)-s$, c'est-à-dire $\tau\big(F(s,p)\big)=\tau(p)-s$ pour $|s|<s_1$.

On dérive en $s=0$ : à gauche, par la règle de la chaîne et $\frac{\partial F}{\partial t}(0,p)=X(F(0,p))=X(p)$, on obtient $d\tau_p\big(X(p)\big)$ ; à droite, $-1$. Donc $d\tau_p\big(X(p)\big)=-1$ : partir « un peu plus loin sur la même trajectoire » fait arriver d'autant plus tôt.

**4.** $p\mapsto(\tau(p),p)$ est $C^1$ de $V$ dans $]T_0-\varepsilon,T_0+\varepsilon[\times V\subset D_0$ et $F$ est $C^1$ sur $D_0$ : $P$ est $C^1$ (règle de la chaîne), et $P(p)\in\Sigma$ par la question 1. Pour $p\in V$ et $|s|<s_1$, le calcul de la question 3 donne
$$
P\big(F(s,p)\big)=F\big(\tau(p)-s,F(s,p)\big)=F(\tau(p),p)=P(p).
$$
Plus généralement, si $F(s,p)\in V$ pour tout $s$ dans un intervalle $[s_a,s_b]\ni0$, la fonction $s\mapsto P(F(s,p))$ y est localement constante (appliquer ce qui précède au point $F(s,p)$, grâce à $F(s',F(s,p))=F(s+s',p)$), donc constante sur l'intervalle connexe : $P$ est constante le long des morceaux de trajectoires contenus dans $V$. En dérivant $s\mapsto P(F(s,p))$ en $s=0$ : $dP_p\big(X(p)\big)=0$.

(Contrôle : $dP_p(h)=X\big(P(p)\big)\,d\tau_p(h)+\frac{\partial F}{\partial p}(\tau(p),p)\,h$, donc $dP_p(X(p))=0$ équivaut à $\frac{\partial F}{\partial p}(\tau(p),p)\,X(p)=X\big(F(\tau(p),p)\big)$ : la différentielle du flot transporte le champ sur lui-même.)

**5. a)** Le système est $x'=1$, $y'=y^2$. Donc $x(t)=x+t$ ; pour $y\neq0$, $(1/y(t))'=-1$ donne $y(t)=\dfrac{y}{1-ty}$ (solution sur l'intervalle contenant $0$ où $1-ty>0$), et pour $y=0$, $y(t)=0$ par unicité. Ainsi
$$
F\big(t,(x,y)\big)=\Big(x+t,\ \frac{y}{1-ty}\Big),\qquad
J((x,y))=\begin{cases}]-\infty,1/y[ & \text{si } y>0,\\ \R & \text{si } y=0,\\ ]1/y,+\infty[ & \text{si } y<0,\end{cases}
$$
l'intervalle étant maximal car $|y(t)|\to+\infty$ à la borne finie.

**b)** $F\big(t,(0,\tfrac12)\big)\in\Sigma\iff\dfrac{1/2}{1-t/2}=1\iff t=1$ : $T_0=1\in J=\,]-\infty,2[$, $q_0=(1,1)$. Transversalité : $d\varphi_{(x,y)}(u,v)=v$, donc $d\varphi_{q_0}(X(q_0))=1^2=1\neq0$.

Pour $y>0$ et $t\in J((x,y))$ : $\dfrac{y}{1-ty}=1\iff1-ty=y\iff t=\dfrac{1-y}{y}=\dfrac1y-1$, et cette valeur est bien dans $]-\infty,1/y[$. Donc, pour **tout** $(x,y)$ avec $y>0$, il y a exactement un temps d'atteinte de $\Sigma$, $\tau(x,y)=\frac1y-1$, fonction $C^1$ sur $V=\{y>0\}$ (ouvert) avec $\tau(p_0)=1$. (Pour $y\le0$, $y(t)$ reste $\le0$ et n'atteint jamais $1$.)

*Lien avec la question 1.* Si $(V_1,\varepsilon_1,\tau_1)$ est un triplet fourni par la question 1, alors pour $p\in V_1$, $\tau_1(p)\in J(p)$ est un temps d'atteinte de $\Sigma$ ; les points d'ordonnée $y\le0$ n'atteignant jamais $\Sigma$, on a $V_1\subset\{y>0\}$, et l'unicité du temps d'atteinte donne $\tau_1=\tau_{|V_1}$. En revanche, l'ouvert $\{y>0\}$ tout entier ne convient **pas** comme $V$ dans l'énoncé de la question 1 : $\tau$ n'y est pas bornée (donc $\tau(V)\not\subset\,]T_0-\varepsilon,T_0+\varepsilon[$), et $]T_0-\varepsilon,T_0+\varepsilon[\times\{y>0\}\not\subset D_0$ puisque $1/y<1-\varepsilon$ pour $y$ grand. La question 1 est un énoncé **local** ; l'exemple montre qu'il peut se globaliser, mais ce n'est pas automatique.

*Question 2.* $\dfrac{\partial F}{\partial p}\big(t,(x,y)\big)=\begin{pmatrix}1&0\\0&\frac1{(1-ty)^2}\end{pmatrix}$ ; en $(T_0,p_0)$, $1-T_0y_0=\frac12$, d'où $\frac{\partial F}{\partial p}(T_0,p_0)(h_1,h_2)=(h_1,4h_2)$ et la formule donne $d\tau_{p_0}(h)=-4h_2$. Directement : $\partial_y\tau=-1/y^2=-4$ en $y=\frac12$, $\partial_x\tau=0$. ✓

*Question 3.* $d\tau_{(x,y)}(X(x,y))=0\cdot1+\big(-\tfrac1{y^2}\big)\cdot y^2=-1$. ✓

*Application $P$.* $P(x,y)=F\big(\tfrac1y-1,(x,y)\big)=\big(x+\tfrac1y-1,\ 1\big)$. Elle est bien constante le long des trajectoires : $x(t)+\frac1{y(t)}=x+t+\frac1y-t=x+\frac1y$ ($x+1/y$ est une **intégrale première** du champ sur $\{y>0\}$, et $P$ la « lit » sur la droite $\Sigma$).

**6.** Le flot est $F\big(t,(x,y)\big)=(x+t,y)$, défini sur $\R\times\R^2$. $F(1,(-1,0))=(0,0)$ et $\varphi(0,0)=0$ : $q_0=(0,0)\in\Sigma$. Mais $d\varphi_{(x,y)}(u,v)=v-2xu$, donc $d\varphi_{q_0}(X(q_0))=d\varphi_{(0,0)}(1,0)=0$ : la trajectoire est **tangente** à la parabole $\Sigma$ en $q_0$.

Soit $V$ un voisinage quelconque de $p_0=(-1,0)$ ; il contient un point $p=(-1,-\eta)$ avec $\eta>0$. La trajectoire de $p$ est la droite horizontale $\{y=-\eta\}$, et pour tout $t$, $\varphi(F(t,p))=-\eta-(t-1)^2<0$ : elle ne rencontre jamais $\Sigma$. Aucune fonction $\tau$ définie sur $V$ ne peut donc vérifier $F(\tau(p),p)\in\Sigma$. (Pour $\eta<0$, il y a au contraire **deux** temps d'atteinte $1\pm\sqrt{|\eta|}$, qui se confondent quand $\eta\to0$ et ne dépendent pas de façon dérivable de $\eta$ en $0$ : c'est le comportement typique d'une racine double.)

## Pièges et variantes

* **Domaines.** Le théorème des fonctions implicites demande une fonction définie sur un **produit d'ouverts** : c'est l'ouverture de $D_0$ (Théorème VII.3.9 a) qui permet de le trouver ; sans elle, $G(p,t)=\varphi(F(t,p))$ ne serait même pas défini pour $(p,t)$ voisin de $(p_0,T_0)$.
* **Unicité locale seulement.** $\tau(p)$ est l'unique temps d'atteinte **dans $]T_0-\varepsilon,T_0+\varepsilon[$** : la trajectoire peut traverser $\Sigma$ à d'autres instants (pour une orbite périodique, une infinité de fois). À la question 3, il faut vérifier explicitement que $\tau(p)-s$ reste dans cet intervalle et $F(s,p)$ dans $V$ avant d'invoquer l'unicité.
* **Propriété de groupe : vérifier que tout est défini.** $F_{\tau-s}\circ F_s=F_\tau$ n'a de sens que si $\tau(p)-s\in J(F(s,p))$, ce que donne $J(F(s,p))=J(p)-s$.
* **La transversalité est essentielle** (question 6) : en un point de tangence, le nombre de temps d'atteinte peut sauter de $0$ à $2$.
* Variante (application de Poincaré) : si $p_0\in\Sigma$ est sur une orbite **périodique** de période $T_0$, $P$ restreinte à $\Sigma\cap V$ est l'**application de premier retour**, ses points fixes correspondent aux orbites périodiques voisines, et $1$ est toujours valeur propre de $\frac{\partial F}{\partial p}(T_0,p_0)$ (vecteur propre $X(p_0)$, d'après la remarque de contrôle de la question 4).
* Variante : si $X$ et $\varphi$ sont de classe $C^k$, $\tau$ et $P$ sont de classe $C^k$ (même preuve, $F$ étant $C^k$).
